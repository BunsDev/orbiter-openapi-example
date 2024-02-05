export default function shortenAddress(address: string, len = 4) {

    if (address?.length < 11)
        return address;
    return `${address?.substring(0, len)}...${address?.substring(address?.length - len, address?.length)}`;
}