---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 21. 合并两个有序链表

## 题目

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

## 思路

首先想到迭代法，通过两个指针向后走，哪个小就连到新的结果链表中，时间复杂度O(N+M)
看完题解后发现使用递归法也可以做，时间复杂度也为O(N+M)

## 题解

迭代法：
```java
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head = new ListNode();
        ListNode headResult =  head;
        while(true){
            if (list1 == null && list2 == null) {
                break;
            }
            if (list1 == null) {
                head.next = list2;
                head = head.next;
                list2 = list2.next;
                continue;
            }
            if (list2 == null) {
                head.next = list1;
                head = head.next;
                list1 = list1.next;
                continue;
            }
            if (list1.val >= list2.val) {
                head.next = list2;
                head = head.next;
                list2 = list2.next;
            } else {
                head.next = list1;
                head = head.next;
                list1 = list1.next;
            }
        }
        return headResult.next;
    }
}
```
递归法：

```java
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) {
            return list2;
        }
        if (list2 == null) {
            return list1;
        }
        if (list1.val <= list2.val){
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }else {
            list2.next = mergeTwoLists(list2.next, list1);
            return list2;
        }
    }
}
```