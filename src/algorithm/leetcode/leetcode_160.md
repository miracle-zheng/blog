---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 160. 相交链表

## 题目

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

## 思路

通过双指针，先计算两个链表的长度，把长链表向后走两者长度的差值，也就是对齐两个链表，然后双指针同时往后走，如果两者相等则证明两个链表相交


## 题解

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int aLength = 0;
        int bLength = 0;
        ListNode headATemp = headA;
        ListNode headBTemp = headB;
        while (headATemp != null){
            aLength++;
            headATemp = headATemp.next;
        }
        while (headBTemp != null){
            bLength++;
            headBTemp = headBTemp.next;
        }
        if (aLength > bLength) {
            for (int i = 0; i< aLength - bLength; i++){
                headA = headA.next;
            }
        } else if (aLength < bLength){
            for (int i = 0; i< bLength - aLength; i++){
                headB = headB.next;
            }
        }
        while (headA != null && headB != null) {
            if (headA == headB){
                return headA;
            }
            headA = headA.next;
            headB = headB.next;
        }
        return null;
    }
}
```