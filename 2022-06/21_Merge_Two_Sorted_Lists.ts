class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let resHead = list1 && list2 ? (list1.val <= list2.val ? list1 : list2) : list1 ?? list2;
  if (!resHead) {
    return null;
  }
  let resNode = resHead;
  let node1 = resHead === list1 ? list1.next : list1;
  let node2 = resHead === list2 ? list2.next : list2;

  while (node1 && node2) {
    if (node1.val <= node2.val) {
      resNode.next = node1;
      resNode = resNode.next;
      node1 = node1.next;
      continue;
    }

    resNode.next = node2;
    resNode = resNode.next;
    node2 = node2.next;
  }

  while (node1) {
    resNode.next = node1;
    resNode = resNode.next;
    node1 = node1.next;
  }

  while (node2) {
    resNode.next = node2;
    resNode = resNode.next;
    node2 = node2.next;
  }

  return resHead;
}
