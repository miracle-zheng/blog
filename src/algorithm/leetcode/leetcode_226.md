---
date: 2023-07-18
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 226. 翻转二叉树

## 题目

给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

## 思路

参考Leetcode-101对称二叉树，递归的去翻转root的左子树和右子树
1、root的左子树 交换 root的右子树
2、root的左子树的左子树 交换 root的左子树的右子树；root的右子树的左子树 交换 root的右子树的右子树
......以此类推

## 题解

```java
class Solution {
    public TreeNode invertTree(TreeNode root) {
        invert(root);
        return root;
    }
    
    public void invert(TreeNode root){
        //如果当前根节点为null，就返回
        if (root == null)
            return;
        TreeNode left = root.left;
        TreeNode right = root.right;
        //根节点的左右交换
        root.left = right;
        root.right = left;
        //继续递归翻转左子节点和右子节点
        invert(root.left);
        invert(root.right);
    }
}
```