export async function getAllFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  for await (const entry of Deno.readDir(dir)) {
    const fullPath = `${dir}/${entry.name}`;
    if (entry.isDirectory) {
      files.push(...(await getAllFiles(fullPath))); // Recursively get files in subdirectories
    } else if (entry.isFile) {
      files.push(fullPath);
    }
  }
  return files;
}

export * from "./markdown.ts";
