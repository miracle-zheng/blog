---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 144. 二叉树的前序遍历

## 题目

给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

## 思路

通过递归访问，二叉树的前序遍历为：根左右


## 题解

```java
class Solution {
    //前序遍历，根左右
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        accessTree(root, result);
        return result;
    }
    public void accessTree(TreeNode root, List<Integer> result){
        if (root == null) return;
        result.add(root.val);
        accessTree(root.left, result);
        accessTree(root.right, result);
    }
}
```