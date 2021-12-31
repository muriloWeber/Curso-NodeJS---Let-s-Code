const createQueue = () => {
    let list = [];

    return {
        add : value => { 
            list = [...list, value]
        }, 
        remove: () => {
            const [head, ...tail] = list;
            list = tail;
            return head;
        }
    }
}

const fila = createQueue();
fila.add(10);
fila.add(20);

const item = fila.remove();
console.log(item);

const item2 = fila.remove();
console.log(item2);

const item3 = fila.remove();
console.log(item3); 

