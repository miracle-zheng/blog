---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 104. 二叉树的最大深度

## 题目

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

## 思路

深度优先搜索思想，如果知道左子树和右子树的最大深度为l和r，那该二叉树的最大深度为max(l,r)+1，退出条件为找到null，时间复杂度为O(N)


## 题解

```java
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        } else {
            return Math.max(maxDepth(root.left), maxDepth(root.right)) +1 ;
        }
    }
}
```