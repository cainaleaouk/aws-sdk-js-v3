import {
  CloudFrontClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFrontClient";
import {
  ListDistributionsByWebACLIdRequest,
  ListDistributionsByWebACLIdResult
} from "../models/index";
import {
  deserializeAws_restXmlListDistributionsByWebACLIdCommand,
  serializeAws_restXmlListDistributionsByWebACLIdCommand
} from "../protocols/Aws_restXml";
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

export type ListDistributionsByWebACLIdCommandInput = ListDistributionsByWebACLIdRequest;
export type ListDistributionsByWebACLIdCommandOutput = ListDistributionsByWebACLIdResult;

export class ListDistributionsByWebACLIdCommand extends $Command<
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDistributionsByWebACLIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListDistributionsByWebACLIdCommandInput,
    ListDistributionsByWebACLIdCommandOutput
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
    input: ListDistributionsByWebACLIdCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByWebACLIdCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListDistributionsByWebACLIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByWebACLIdCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}