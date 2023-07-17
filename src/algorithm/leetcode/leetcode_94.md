---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 94. 二叉树的中序遍历

## 题目

给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

## 思路

通过递归访问，二叉树的中序遍历为：左根右


## 题解

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        accessTree(root, result);
        return result;
    }
    public void accessTree(TreeNode root, List<Integer> result) {
        if (root == null) return;
        accessTree(root.left, result);
        result.add(root.val);
        accessTree(root.right, result);
    }
}
```