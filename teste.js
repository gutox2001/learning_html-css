var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var node3 = new ListNode(3);
var node2 = new ListNode(2, node3);
var node1 = new ListNode(1, node2);
var atualNode = node1;
var strNumber = '';
do {
    console.log('Valor atual: ', atualNode ? atualNode.val : 'null');
    strNumber = atualNode ? atualNode.val + strNumber : strNumber;
    console.log('String atual: ', strNumber);
    console.log('Valor numérico da string: ', parseInt(strNumber));
    atualNode = atualNode ? atualNode.next : null;
} while (atualNode);
