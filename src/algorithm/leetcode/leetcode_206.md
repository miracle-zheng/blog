---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 206. 反转链表

## 题目

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

## 思路

通过一个preNode的指针指向当前处理的前节点，然后赋值temp-next为当前的next，当前指向pre，pre走向当前，当前设置为temp-next


## 题解

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode pre = null;
        while(head != null) {
            ListNode next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}
```