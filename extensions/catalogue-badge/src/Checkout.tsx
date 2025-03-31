  import {
    reactExtension,
    InlineLayout,
    View,
    BlockStack,
    useAppMetafields,
    Image,
    Text,
    Heading,
  } from "@shopify/ui-extensions-react/checkout";
  
  export default reactExtension("purchase.checkout.block.render", () => (
    <Extension />
  ));
  
  function Extension() {
    const compMetafields = useAppMetafields({
      key: "tier",
      namespace: "custom",
      type: "company"
    });
  
    const tier = compMetafields[0]?.metafield?.value;
    const goldImage = 'https://cdn.shopify.com/YOUR_IMAGE_HERE';
    const silverImage = 'https://cdn.shopify.com/YOUR_IMAGE_HERE';  
    const bronzeImage = 'https://cdn.shopify.com/YOUR_IMAGE_HERE';
  
    const renderTierInfo = (tier, discount, imageUrl) => (
      <InlineLayout columns={['20%', 'fill']}>
        <View padding="base">
          <Image source={imageUrl} />
        </View>
        <View blockAlignment="center" padding="base">
          <BlockStack padding="tight">
            <Heading>{tier.charAt(0).toUpperCase() + tier.slice(1).toLowerCase()} Tier</Heading>
            <Text size="extraSmall">You benefit from {discount}% off of all products</Text>
          </BlockStack>
        </View>
      </InlineLayout>
    );
    
    if (tier === "gold") {
      return renderTierInfo("gold", 20, goldImage)
    } else if (tier === "silver") {
      return renderTierInfo("silver", 10, silverImage)
    } else if (tier === "bronze") {
      return renderTierInfo("bronze", 5, bronzeImage)
    } else {
      console.log("Invalid tier or no metafield value found.");
    }
  
  }
  