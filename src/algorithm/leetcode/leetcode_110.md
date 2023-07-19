---
date: 2023-07-18
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 110. 平衡二叉树

## 题目

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

## 思路

参考Leetcode-104二叉树的最大深度，如果左子树和右子树的最大深度差值的绝对值大于1，则不平衡

## 题解

```java
class Solution {
    private boolean result = true;
    public boolean isBalanced(TreeNode root) {
        getDepth(root, 1);
        return result;
    }
    public Integer getDepth(TreeNode root, Integer depth) {
        if (root == null) return depth -1 ;
        Integer leftDepth = getDepth(root.left, depth + 1);
        Integer rightDepth = getDepth(root.right, depth +1);
        if (Math.abs(leftDepth - rightDepth) > 1){
            result = false;
        }
        return Math.max(leftDepth, rightDepth);
    }
}
```