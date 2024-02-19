import \* as fs from 'fs';

interface OpenAPISpec { openapi: string; info: { title: string; version: string;
}; paths: { [key: string]: any }; }

function combineOpenAPISpecs(filePaths: string[]): OpenAPISpec { let
combinedSpec: OpenAPISpec = { openapi: "3.0.0", info: { title: "Combined OpenAPI
Spec", version: "1.0.0" }, paths: {} };

    filePaths.forEach(filePath => {
        let spec: OpenAPISpec = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        combinedSpec.paths = { ...combinedSpec.paths, ...spec.paths };
    });

    return combinedSpec;

}

const filePaths: string[] = ["openapispec1.json", "openapispec2.json",
"openapispec3.json"]; const combinedSpec: OpenAPISpec =
combineOpenAPISpecs(filePaths);

fs.writeFileSync('combined_openapispec.json', JSON.stringify(combinedSpec, null,
2));
