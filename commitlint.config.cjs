module.exports = {
  extends: ["@commitlint/config-conventional"],
}

// git commit -m <type>[optional scope]: <description> //注意冒号后面有空格
// - type：提交的类型（如新增、修改、更新等）
// - optional scope：涉及的模块，可选
// - description：任务描述
// const types = [
//   { type: 'feat', section: '✨ Features' },
//   { type: 'fix', section: '🐛 Bug Fixes' },
//   { type: 'docs', section: '📚 Documentation' },
//   { type: 'style', section: '🎨 Styles' },
//   { type: 'refactor', section: '♻️ Code Refactoring' },
//   { type: 'perf',section: '⚡️ Performance Improvements' }
// ]
