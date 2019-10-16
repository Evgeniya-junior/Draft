<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:template match="/">
  <html>
   <body>
     <h3>Вся продукция компании "Nestlé"</h3>
       <xsl:for-each select="products/grupp">
        <xsl:value-of select="@name">
          <xsl:for-each select="var/ulist">
           <xsl:value-of select="poz">
         </xsl:for-each>
        <xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>