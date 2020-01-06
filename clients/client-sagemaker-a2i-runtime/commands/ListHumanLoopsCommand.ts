import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SageMakerA2IRuntimeClient";
import { ListHumanLoopsRequest, ListHumanLoopsResponse } from "../models/index";
import {
  deserializeAws_restJson1_1ListHumanLoopsCommand,
  serializeAws_restJson1_1ListHumanLoopsCommand
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

export type ListHumanLoopsCommandInput = ListHumanLoopsRequest;
export type ListHumanLoopsCommandOutput = ListHumanLoopsResponse;

export class ListHumanLoopsCommand extends $Command<
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput,
  SageMakerA2IRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHumanLoopsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerA2IRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHumanLoopsCommandInput, ListHumanLoopsCommandOutput> {
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
    input: ListHumanLoopsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListHumanLoopsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListHumanLoopsCommandOutput> {
    return deserializeAws_restJson1_1ListHumanLoopsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}