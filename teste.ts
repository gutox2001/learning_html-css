class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

let node3: ListNode = new ListNode(3);
let node2: ListNode = new ListNode(2, node3);
let node1: ListNode = new ListNode(1, node2);
let atualNode: ListNode | null = node1;

let strNumber: string = '';

do {
    console.log('Valor atual: ', atualNode ? atualNode.val : 'null');
    strNumber = atualNode ? atualNode.val + strNumber : strNumber;

    console.log('String atual: ', strNumber);

    console.log('Valor numérico da string: ', parseInt(strNumber));

    atualNode = atualNode ? atualNode.next : null;
} while (atualNode);

