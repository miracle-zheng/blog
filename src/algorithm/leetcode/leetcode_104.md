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
方法1：
```java
class Solution {
    public int maxDepth(TreeNode root) {
        //根节点为第一层，开始找
        return find(root, 1);
    }

    public int find(TreeNode root, int depth){
        //如果当前节点为null，证明这一层此子树没有，所以最深就是回退一层
        if(root == null) return depth - 1;
        //返回递归寻找左子树和右子树的深度，因为是找当前的子树，所以深度要加一
        return Math.max(find(root.left, depth+1), find(root.right, depth+1));
    }
}
```
方法2：
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