# EN16931 viewer

Version 0.0.1 of a APL2 licensed [electron](https://electronjs.org/) app which uses
[electron webpack](https://webpack.electron.build/) and a
[xslt processor](https://www.npmjs.com/package/xslt-processor) as well as
the XSLT style sheets from [XRechnung](https://github.com/itplr-kosit/xrechnung-visualization)
to display UN/CEFACT EN16931 XML invoices like
XRechnung or ZUGFeRD/Factur-X.

The thing is: It does not work at all and throws an error, at least with the XSLT processor I used ([issue reported there](https://github.com/fiduswriter/xslt-processor/issues/28))

## Getting Started

```bash
electron-webpack dev
```
