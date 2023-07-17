---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 283. 移动零

## 题目

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

## 思路

第一时间想到的是类似冒泡排序的思想，每次把一个0冒到最后面，但是这种方式时间复杂度比较高。
借用大佬的思想，使用双指针ij，i先向后走，如果不为0就和j进行交换，如果交换了j++，当i走到末尾时，j的位置就是数据和0的分界线，再将j之后所有值设置为0


## 题解
冒泡
```java
class Solution {
    public void moveZeroes(int[] nums) {
        for (int i = 0; i < nums.length; i++){
            for (int j = 0; j < nums.length - 1 ; j++){
                if (nums[j] == 0){
                    int temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                }
            }
        }
    }
}
```
双指针
```java
class Solution {
    public void moveZeroes(int[] nums) {
        int j = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] != 0){
                nums[j] = nums[i];
                j++;
            }
        }
        for(int i = j; i < nums.length; i++){
            nums[i] = 0;
        }
    }
}
```