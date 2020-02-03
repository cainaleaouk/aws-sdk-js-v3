import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  GetEbsEncryptionByDefaultRequest,
  GetEbsEncryptionByDefaultResult
} from "../models/index";
import {
  deserializeAws_ec2GetEbsEncryptionByDefaultCommand,
  serializeAws_ec2GetEbsEncryptionByDefaultCommand
} from "../protocols/Aws_ec2";
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

export type GetEbsEncryptionByDefaultCommandInput = GetEbsEncryptionByDefaultRequest;
export type GetEbsEncryptionByDefaultCommandOutput = GetEbsEncryptionByDefaultResult;

export class GetEbsEncryptionByDefaultCommand extends $Command<
  GetEbsEncryptionByDefaultCommandInput,
  GetEbsEncryptionByDefaultCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEbsEncryptionByDefaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetEbsEncryptionByDefaultCommandInput,
    GetEbsEncryptionByDefaultCommandOutput
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
    input: GetEbsEncryptionByDefaultCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetEbsEncryptionByDefaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetEbsEncryptionByDefaultCommandOutput> {
    return deserializeAws_ec2GetEbsEncryptionByDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}