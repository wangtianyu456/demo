// var intersection = function (nums1, nums2) {
//   return [...new Set(nums1)].filter((item) => new Set(nums2).has(item));
// };
var intersection = function (nums1, nums2) {
  const map = {};
  const ret = [];
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true;
  }
  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]]) {
      ret.push(nums2[j]);
      map[nums2[i]] = false;
    }
  }
};
