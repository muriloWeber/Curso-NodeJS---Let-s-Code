/*
Crie uma modelagem de classes para uma agenda capaz de armazenar contatos. Através dessa agenda é possível incluir, remover, buscar 
e listar contatos já cadastrados.
*/

const byName = nome => contatos => contatos.nome === nome;
const byId = id => contatos => contatos.id === id

class Agenda {
    constructor(){
        this._id = 1000;
        this.contatos = [];
    }
    get id () {return this._id}
    set id (id) {
        if(id === String || id === Number || id === undefined || id === null || id === Boolean) throw "O Id não pode ser editado."
    }

    incluir (nome, email, fone) {
        this.contatos.push({id: this._id++, nome: nome, email: email, fone: fone});
    }

    remover (info) {
        if(this.contatos.findIndex(byName(info)) > -1) {
            this.contatos.splice(this.contatos.findIndex(byName(info)), 1);
        }else if (this.contatos.findIndex(byId(info)) > -1) {
            this.contatos.splice(this.contatos.findIndex(byId(info)), 1);
        } else {
            throw "Use o nome ou o Id do contato para removê-lo"
        }        
    }

    buscar (info) {
        if(this.contatos.findIndex(byName(info)) > -1) {
            let index = this.contatos.findIndex(byName(info));
            console.log(this.contatos[index]);
        }else if (this.contatos.findIndex(byId(info)) > -1) {
            let index = this.contatos.findIndex(byId(info));
            console.log(this.contatos[index]);
        } else {
            throw "Use o nome ou o Id do contato para buscá-lo"
        }    
    }

    listar () {
        console.log(this.contatos);
    }
}

const agenda = new Agenda();

agenda.incluir("Joseph", "@gmail", 981818181);
agenda.incluir("Mary", "@hotmail", 982828282);
agenda.incluir("Mathew", "@yahoo", 983838383);
agenda.remover("Mary");
agenda.listar();

agenda.buscar("Joseph");
