import { Project, SourceFile } from "ts-morph";
/**
 * Ts文件解析器
 */
export class AstParser {

  // 解析ts或js文件
  public parseByFilePath(filePath: string): SourceFile {
    // 初始化 Project
    const project = new Project({
      compilerOptions: { skipLibCheck: true } // 跳过库文件检查，加速处理
    });
    // 加载文件
    const sourceFile = project.addSourceFileAtPath(filePath);
    // 返回加载的文件
    return sourceFile
  }
  // 从文本获取 SourceFile 对象
  public parseByText(text: string): SourceFile {
    const project = new Project();
    const sourceFile = project.createSourceFile('tempFile.ts', text);
    return sourceFile
  }
}