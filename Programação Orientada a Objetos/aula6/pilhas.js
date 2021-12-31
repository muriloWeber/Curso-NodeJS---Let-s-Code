const createStack = () => {

    let list = [];

    return {
        add : value => { 
            list = [value, ...list]
        }, 
        remove: () => {
            const [head, ...tail] = list;
            list = tail;
            return head;
        }
    };

}

const pilha = createStack();
pilha.add(10);
pilha.add(20);

const item = pilha.remove();
console.log(item) // 20

const item2 = pilha.remove();
console.log(item) // 10

const item3 = pilha.remove();
console.log(item) // undefined