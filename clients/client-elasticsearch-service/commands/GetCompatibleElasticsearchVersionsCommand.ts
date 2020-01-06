import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticsearchServiceClient";
import {
  GetCompatibleElasticsearchVersionsRequest,
  GetCompatibleElasticsearchVersionsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand,
  serializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetCompatibleElasticsearchVersionsCommandInput = GetCompatibleElasticsearchVersionsRequest;
export type GetCompatibleElasticsearchVersionsCommandOutput = GetCompatibleElasticsearchVersionsResponse;

export class GetCompatibleElasticsearchVersionsCommand extends $Command<
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCompatibleElasticsearchVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCompatibleElasticsearchVersionsCommandInput,
    GetCompatibleElasticsearchVersionsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCompatibleElasticsearchVersionsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetCompatibleElasticsearchVersionsCommandOutput> {
    return deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}