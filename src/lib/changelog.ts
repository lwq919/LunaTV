// 此文件由 scripts/convert-changelog.js 自动生成
// 请勿手动编辑

export interface ChangelogEntry {
  version: string;
  date: string;
  added: string[];
  changed: string[];
  fixed: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "2025-08-26",
    added: [
      "新增对 SITE_BASE 环境变量的支持，解决 m3u8 重写时 base url 错误的问题"
    ],
    changed: [
      "移除授权相关逻辑",
      "移除代码混淆",
      "移除 melody-cdn-sharon"
    ],
    fixed: []
  }
];

export default changelog;
