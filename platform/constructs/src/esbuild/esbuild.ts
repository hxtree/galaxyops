import * as esbuild from 'esbuild';

export interface EsbuildOptions {
  entrypoints: string[];
  bundle: boolean;
  outfile: string;
  external?: string[];
  target?: string;
  platform?: string;
}

export async function esbuilder(options: EsbuildOptions): Promise<any> {
  return esbuild.build({
    logLevel: 'info',
    entryPoints: options.entrypoints,
    bundle: options.bundle,
    outfile: options.outfile,
    external: options.external ?? [],
    target: options.target ?? 'es2021',
    sourcemap: false,
    keepNames: true,
    logLimit: 0,
    // skipLibCheck: true,
    // platform: options.platform ?? 'node',
  });
}
