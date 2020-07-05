import SQLite from "react-native-sqlite-storage";

const database = SQLite.openDatabase('meubanco.db');


const sqlTableCreations =[
    'CREATE TABLE IF NOT EXISTS pessoas (id INTEGER primary key not null,nome TEXT, dataNascimento TEXT, peso TEXT, altura TEXT);',
    'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER primary key not null, login TEXT, senha TEXT, id_pessoa INTEGER, FOREIGN KEY (id_pessoa) REFERENCES pessoas(id) );',
    'DELETE FROM pessoas',
    'DELETE FROM usuarios',
];

export const init =  () => {
    //essa transaction é um "envelope" para nosso comando sql que torna ele consistente, ou seja, o commit só ocorre se toda a transação for completada
    const promise = new Promise(   (resolve, reject) =>{
        database.transaction( (objetoDaTransacao) =>{
            for (var i = 0; i < sqlTableCreations.length; i++) {
                console.log("execute sql : " + sqlTableCreations[i]);
                objetoDaTransacao.executeSql(sqlTableCreations[i]);
                console.log("Concluiu sql ", i);
            }
        }, (error) => {
            reject(error)
        }, () => {
            console.log("transaction complete call back ");
            resolve()
        })
    })
    return promise;

}


export const insertPessoa = (nome,dataNascimento,peso,altura) =>{  
    const promise = new Promise((resolve, reject) =>{  
        database.transaction( (objetoDaTransacao) =>{
            objetoDaTransacao.executeSql('INSERT INTO pessoas (nome,dataNascimento,peso,altura) VALUES (?,?,?,?)',
            [nome,dataNascimento,peso,altura], //vetor de argumentos dinâmicos
            (_, result) => { resolve(result)   },
            (_, error) => { reject(error)   },
            )
        })
    })  
    return promise;
}

export const findAllPessoas = () =>{  
    
    const promise = new Promise((resolve, reject) =>{  
        database.transaction( (objetoDaTransacao) =>{
            objetoDaTransacao.executeSql('SELECT * FROM pessoas',
            [], //vetor de argumentos dinâmicos
            (_, result) => { resolve(result)   },
            (_, error) => { reject(error)   },
            )
        })
    })  
    return promise;
}

export const insertUsuario = (login, senha, id_pessoa) =>{  
    const promise = new Promise((resolve, reject) =>{  
        database.transaction( (objetoDaTransacao) =>{
            objetoDaTransacao.executeSql('INSERT INTO usuarios (login, senha, id_pessoa) VALUES (?,?,?)',
            [login, senha, id_pessoa], //vetor de argumentos dinâmicos
            (_, result) => { resolve(result)   },
            (_, error) => { reject(error)   },
            )
        })
    })  
    return promise;
}

export const findUserById = (id) =>{  
    
    const promise = new Promise((resolve, reject) =>{  
        database.transaction( (objetoDaTransacao) =>{
            objetoDaTransacao.executeSql('SELECT * FROM usuarios where id = ?',
            [id], //vetor de argumentos dinâmicos
            (_, result) => { resolve(result)   },
            (_, error) => { reject(error)   },
            )
        })
    })  
    return promise;
}


//exportando um script para inserção de uma pessoa no database
export const findPersonById = (id) =>{  
    
    const promise = new Promise((resolve, reject) =>{  
        database.transaction( (objetoDaTransacao) =>{
            objetoDaTransacao.executeSql('SELECT * FROM pessoas where id = ?',
            [id], //vetor de argumentos dinâmicos
            (_, result) => { resolve(result)   },
            (_, error) => { reject(error)   },
            )
        })
    })  
    return promise;
}