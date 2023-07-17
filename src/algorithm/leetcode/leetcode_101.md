---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 101. 对称二叉树

## 题目

给你一个二叉树的根节点 root ， 检查它是否轴对称。

## 思路

通过递归访问，判断每个左右子树是否相等，如果左右子树相等，再判断左子树的左子树和右子树的右子树是否相等以及左子树的右子树和右子树的左子树是否相等。（right.right == left.left ; right.left == left.right）


## 题解

```java
class Solution {
    public boolean isSymmetric(TreeNode root) {
        return check(root.left, root.right);
    }
    public boolean check(TreeNode left, TreeNode right) {
        if (left == null && right == null) return true;
        if (left != null && right == null) return false;
        if (left == null && right != null) return false;
        if (left.val != right.val) return false;
        return check(left.left, right.right) && check(left.right, right.left);
    }
}
```