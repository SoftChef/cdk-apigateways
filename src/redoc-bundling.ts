import * as fs from 'fs';
import * as path from 'path';
import {
  BundlingOptions,
  DockerImage,
  ILocalBundling,
} from 'aws-cdk-lib';
import {
  ISource,
  Source,
} from 'aws-cdk-lib/aws-s3-deployment';
import {
  CustomPage,
} from './documentation';

export interface RedocBuildProps {
  /**
   * Specify the documentation definitions path.
   * Support format: Swagger 2.0, OpenAPI 3.0, OpenAPI 3.1
   */
  readonly source?: string;
  /**
   * Custom documentation page.
   */
  readonly customPage: CustomPage;
  /**
   * Specify docker node image
   */
  readonly nodeImage?: string;
}

export class RedocBundling implements BundlingOptions {
  /**
   * Bundling Redoc page with Swagger/OpenAPI definitions.
   * @param props RedocBuildProps
   * @returns ISource
   */
  public static bundling(props: RedocBuildProps): ISource {
    return Source.asset(
      (props.source ?? path.resolve(__dirname, '../assets')).replace(/^(.*)\/.*$/, '$1'),
      {
        bundling: new RedocBundling(props),
      },
    );
  }

  public readonly image: DockerImage;

  public readonly command?: string[];

  public readonly environment?: { [key: string]: string } | {};

  public readonly local?: ILocalBundling;

  constructor(props: RedocBuildProps) {
    this.image = DockerImage.fromRegistry(props.nodeImage!);
    this.command = ['ls', '>', '/dev/null'];
    const generateRedoc = (outputDir: string) => {
      return this.generateRedoc(props, outputDir);
    };
    this.local = {
      tryBundle(outputDir: string): boolean {
        try {
          generateRedoc(outputDir);
        } catch (error) {
          return false;
        }
        return true;
      },
    };
  }
  /**
   * Generate Redoc static files
   * @param props RedocBuildProps
   * @param outputDir string
   * @returns void
   */
  private generateRedoc(props: RedocBuildProps, outputDir: string): void {
    const assetsPath: string = path.resolve(__dirname, '../assets');
    const indexTemplatePath: string = `${assetsPath}/index.template`;
    const exampleYamlPath: string = `${assetsPath}/example.yaml`;
    try {
      fs.copyFileSync(props.source ?? exampleYamlPath, `${outputDir}/definitions.yaml`);
      const indexTemplate: string = fs.readFileSync(indexTemplatePath).toString();
      const indexHtml = indexTemplate
        .replace('{{ pageTitle }}', props.customPage.pageTitle ?? 'API Docs')
        .replace('{{ cssStyles }}', props.customPage.cssStyles ?? '');
      fs.writeFileSync(`${outputDir}/index.html`, indexHtml);
    } catch (error) {
      console.log(error);
    }
  }
}