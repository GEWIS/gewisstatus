status: operational
title: No known issues
date: 2026-04-03T18:58:00Z

## Recent changes

### planka.gewis.nl -> kaneo.gewis.nl migration
As Planka recently [stopped supporting Single-Sign On](https://github.com/plankanban/planka/issues/1754) (our login via https://auth.gewis.nl/), we are forced to migrate to another project planning software. For this we decided https://kaneo.gewis.nl. The CBC is able to migrate cards, and will contact owners of the Planka boards about this. The only (relevant) thing that is not supported is multiple assignee's per card, [this might be coming in the future](https://github.com/usekaneo/kaneo/pull/1572).

### Simple webhosting
We are moving from https://webhost-mgmt.gewis.nl / https://webhost-auth.gewis.nl/ to a more simple webhosting setup, with a vscode browser interface. Committees will be migrated one-by-one, everything should keep working, except .htaccess files, if they are used.

### print.gewis.nl
We have moved away from printing via the desktops. Instead you can now print via https://print.gewis.nl, this is only available from desktops and netbird. This works very similar to https://print.tue.nl. Printing policy still applies.

## Short-term known issues
- Nothing :)

<!-- ## Maintenance Schedule

- **Next maintenance window**: January 20, 2024, 02:00 - 04:00 UTC
- **Expected impact**: Brief service interruption during database updates -->
## Longer-term known issues
### gewisvdesktop.gewis.nl
The vdesktop environment has been very flakey. We are moving away from Windows, and the CBC does not have a lot of Windows knowledge anymore. Therefore, we will not be spending time into fixing this, and letting vdesktop slowly die out. Fixing this would take a lot of effort, time and frustration, which is not worth it.

### Cybercrisis aftermath
The following issues are known since the cybercrisis, please see [this GMM letter](https://gewis.nl/en/decision/document/2068) for more information. Since this letter, we have had more communication with LIS and are working on a full architecture change to allow this again. Hopefully before the next academic year. 

- **Mail not reachable off campus via mail clients:**
To access the email, either use the EduVPN, or use the [webmail client](https://webmail.gewis.nl/).

- **Various website might sometimes return "❌  Web page blocked!":**: This is known, but mostly out of our hands.

- **VPN/vdesktop for graduates not reachable:** Unfortunately, nothing we can do about this.

- **Receiving email on custom domains:** Besides @gewis.nl, @gehack.nl, and @barcommissie.nl, other custom email domain aliases - usually from fraternities and boards - do not work anymore. Again, there is nothing we can do about this.

## Contact

If you're experiencing issues not reflected here, please contact our support team at [cbc@gewis.nl](mailto:cbc@gewis.nl).

