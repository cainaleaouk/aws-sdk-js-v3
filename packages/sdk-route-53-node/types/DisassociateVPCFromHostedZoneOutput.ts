import {_UnmarshalledChangeInfo} from './_ChangeInfo';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the response information for the disassociate request.</p>
 */
export interface DisassociateVPCFromHostedZoneOutput {
    /**
     * <p>A complex type that describes the changes made to the specified private hosted zone.</p>
     */
    ChangeInfo: _UnmarshalledChangeInfo;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}