---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 88. 合并两个有序数组

## 题目

给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

## 思路

通过迭代法，通过两个指针向后走，哪个小就放到新的结果数组中，时间复杂度O(N+M)，但是这种方法需要新建一个临时数组，可以通过从后往前排序直接放到nums1中解决（还未实现）


## 题解

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int[] result = new int[m+n];
        int i = 0; int j = 0;
        for (int temp = 0; temp < m+n ; temp++){
            //nums1已经取完
            if (i >= m) {
                result[temp] = nums2[j];
                j++;
                continue;
            }
            if (j >= n) {
                result[temp] = nums1[i];
                i++;
                continue;
            }
            if (nums1[i] <= nums2[j]){
                result[temp] = nums1[i];
                i++;
            }else {
                result[temp] = nums2[j];
                j++;
            }
        }
        System.arraycopy(result, 0, nums1, 0, m+n);
    }
}
```