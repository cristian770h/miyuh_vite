//Listas doblemente enlazadas
//Prototipo de objetos
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function (value,) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;

    const removedHead = this.head.value;
    this.head = this.head.next;
    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }
    console.log(`Cabecera borrada ${removedHead}`);
    return removedHead;
}

LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    const removedTail = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail)
        this.tail.next = null;
    else
        this.head = null;
    console.log(`Cola borrada ${removedTail}`);
    return removedTail;
}


LinkedList.prototype.remove = function (value) {
    let node = this.head;
    let previous = null;

    while (node != null) {
        if (node.value == value) {
            if (!previous) {
                return this.removeHead()
            } else if (!node.next) {
                return this.removeTail()
            } else {
                previous.next = node.next;
                node.next.prev = previous;
            }
            return node.value
        }
        previous = node;
        node = node.next;
    }
    return null;
}

var lista = new LinkedList();
lista.addToHead(90);
lista.addToHead(120);
lista.addToTail(777);
lista.removeTail();
console.log(lista);