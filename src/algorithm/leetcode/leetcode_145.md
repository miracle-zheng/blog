---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 145. 二叉树的后序遍历

## 题目

给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

## 思路

通过递归访问，二叉树的后序遍历为：左右根


## 题解

```java
class Solution {
    //后序遍历，左右根
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        accessTree(root, result);
        return result;
    }
    public void accessTree(TreeNode root, List<Integer> result){
        if (root == null) return;
        accessTree(root.left, result);
        accessTree(root.right, result);
        result.add(root.val);
    }
}
```