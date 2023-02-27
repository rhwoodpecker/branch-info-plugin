const execSync = require('child_process').execSync; // 子进程同步执行

export /**
 * 格式化时间
 *
 * @param {Date} date
 * @return {*}  {string}
 */
const dateFormat = (date: Date):string => {
    const y = date.getFullYear();
    const M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${y}-${M}-${d} ${h}:${m}:${s}`;
}

export const getBranchVersionInfo = (): string => {
    // 当前分支名 git name-rev --name-only HEAD 这个命令会在终端输出你当前的版本或标签信息。
    const vName = execSync('git name-rev --name-only HEAD').toString().trim();
    // 提交的commit hash
    const commitHash = execSync('git show -s --format=%H').toString().trim();
    // 提交人姓名
    const name = execSync('git show -s --format=%cn').toString().trim();
    // 提交日期
    const date = dateFormat(new Date(execSync('git show -s --format=%cd').toString()));
    // 提交描述
    const message = execSync('git show -s --format=%s').toString().trim();
    return `
    当前分支名：${vName}\n
    提交的hash：${commitHash}\n
    提交人姓名：${name}\n
    提交日期：${date}\n
    提交描述：${message}
  `;
}