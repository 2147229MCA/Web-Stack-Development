<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>LUXUS AUCTIONS</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
      	<th>S_ID</th>
        <th>NAME</th>
        <th>PHONE_NO</th>
        <th>EMAIL_ID</th>
        <th>USERNAME</th>
        <th>No_OF_ITEMS</th>
        <th>TYPE</th>
      </tr>
      <xsl:for-each select="Auctio1/Seller">
      <tr>
        <td><xsl:value-of select="Seller_ID"/></td> 
        <td><xsl:value-of select="Name"/></td>
        <td><xsl:value-of select="Phonenum"/></td>
        <td><xsl:value-of select="Emailid"/></td>
        <td><xsl:value-of select="Username"/></td>
        <td><xsl:value-of select="No_of_Items"/></td>
        <td><xsl:value-of select="SelType"/></td>
      </tr>
      </xsl:for-each>
    </table>
    <table border="1">
      <tr bgcolor="#9acd32">
      	<th>I_ID</th>
        <th>ITEM_NAME</th>
        <th>SELLER_ID</th>
        <th>BRAND</th>
        <th>CATEGORY</th>
        <th>BASE_PRICE</th>
        <th>MIN_INCREMENT</th>
        <th>AUCTION_NO</th>
      </tr>
      <xsl:for-each select="Auctio1/Item">
      <tr>
      	<td><xsl:value-of select="I_id"/></td>
        <td><xsl:value-of select="I_name"/></td>
        <td><xsl:value-of select="Sel_ID"/></td>
        <td><xsl:value-of select="Brand"/></td>
        <td><xsl:value-of select="Category"/></td>
        <td><xsl:value-of select="Min_Price"/></td>
        <td><xsl:value-of select="Min_inc"/></td>
        <td><xsl:value-of select="Auction_no"/></td>
      </tr>
      </xsl:for-each>
    </table>
    <table border="1">
      <tr bgcolor="#9acd32">
      	<th>AUCTION_NO</th>
        <th>DATE</th>
        <th>DURATION</th>
        <th>AUCTION_CATEGORY</th>
      </tr>
      <xsl:for-each select="Auctio1/Auction">
      <tr>
      	<td><xsl:value-of select="Auction_no"/></td>
        <td><xsl:value-of select="Date"/></td>
        <td><xsl:value-of select="Duration"/></td>
        <td><xsl:value-of select="Auc_Categ"/></td>
      </tr>
      </xsl:for-each>
    </table>
    <table border="1">
      <tr bgcolor="#9acd32">
      	<th>B_ID</th>
        <th>NAME</th>
        <th>PHONE_NO</th>
        <th>EMAIL_ID</th>
        <th>USERNAME</th>
      </tr>
      <xsl:for-each select="Auctio1/Buyer">
      <tr>
      	<td><xsl:value-of select="B_id"/></td>
        <td><xsl:value-of select="Name"/></td>
        <td><xsl:value-of select="Phonenum"/></td>
        <td><xsl:value-of select="Emailid"/></td>
        <td><xsl:value-of select="Username"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>

