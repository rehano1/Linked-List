class Node {
    constructor (value) {
        this.value = value || null;
        this.nextNode = null;
    }
}


class LinkedList {
    constructor() {
        this.listHead = null;
    }

     append(value) {

        const newNode = new Node (value);
        // if this.listHead is null, add a new node
        if (this.listHead == null) {
            this.listHead = newNode;
            return;
        } 
        // if not, traverse throught the listHead, add node at the end
            let tmp = this.listHead;
            while (tmp.nextNode != null){
                tmp = tmp.nextNode;
            }
            // add a new node at the last
            tmp.nextNode = newNode;
    }
    prepend (value) {

        const newNode = new Node (value);

        // if this.listHead is null then add a new node
        if (this.listHead == null) {
            this.listHead = newNode;
            return
        }
        // if not, add a new node in the beggining and update the listHead to the next node
        else 
            newNode.nextNode = this.listHead;
            this.listHead = newNode;
            
    }
    // calculate the size of total no of nodes in the list
    size () {
        let tmp = this.listHead;
    // use a let const to add no on each iteration
        let count = 0;
    // use while loop and give condition to stop
    if (tmp == null) {
        return count;
    }
    else 
        while (tmp != null) {
            count ++;
            tmp = tmp.nextNode;
        }
            
            return count;

    }
    
}


