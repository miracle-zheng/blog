---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 141. 环形链表

## 题目

给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

## 思路

第一想法是通过一个HashMap记录所有已经走过的节点，如果存在则证明有环，实现没啥问题，但是有更优的解法，基于龟兔赛跑算法的快慢指针想法，即维护两个指针，一个一次走一步，一个一次走两步，如果存在环，两者必然相遇，如果不存在环，那快指针一定会到null，相比于HashMap主要优化在了空间复杂度，不用额外维护一个HashMap了


## 题解

```java
public class Solution {
    //快慢指针的思路，快指针一次走两个，慢指针一次走一个，如果存在环，必然两者会相遇
    public boolean hasCycle(ListNode head) {
        ListNode fastPtr = head;
        ListNode slowPtr = head;
        while (fastPtr != null && fastPtr.next != null && fastPtr.next.next !=null){
            fastPtr = fastPtr.next.next;
            slowPtr = slowPtr.next;
            if (slowPtr == fastPtr) {
                return true;
            }
        }
        return false;
    }
}
```