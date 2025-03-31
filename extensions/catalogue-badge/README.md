# Checkout Extension: Catalogue Badge
This Checkout Extension takes a customer's catalog tier & renders a badge and some text just above the checkout's line items. Indicating their current tier and the discount they are entitled to. It is made up of:
- Checkout Extension via Typescript
- Shopify's Admin api

### Setup
1. Create three catalogues targetting all products; assigning the following values to them:
    - Products > Catalogues:
      - Title: `gold`, 20% price decrease 
      - Title: `silver`, 10% price decrease
      - Title: `bronze`, 5% price decrease

2. Create Company metafields which will be used in the Extension to:
    - Settings > Custom Data > Companies > Add definition:
      - Name: 
      - Namespace & Key: 
      - Select Type: `single line text` > `one value` > `limit to preset choices`:
        - gold
        - silver
        - bronze

3. Assign tier to company:
    - Customers > Companies:
      - Select tier you want to assign to company

4. Configure your images 
    - Upload your images for each tier to: Content > Files
    - Take your image url and assign it to your tiers in your Checkout Extension:
      - `https://cdn.shopify.com/YOUR_IMAGE_HERE`

5. Deploy your Checkout Extension via CLI: `shopify app deploy`

**Note:** Ensure your shopify store has access to Checkout Extensions. This can either be by Shopify Plus or setting up a Development Store.

## License  
This project is licensed under the **MIT License**.

---

### **Contributors**  
- **Moses Sangobiyi** – Developer  