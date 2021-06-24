import { NotFoundException } from '@nestjs/common';

const short_urls = [];

export class RoutingService {
  redirect(shortCode: string, res: any) {
    const { pathUrl } = short_urls.find((item) => item.shortCode === shortCode);

    if (pathUrl) {
      res.redirect(pathUrl);
    } else {
      throw new NotFoundException({});
    }
  }

  shortener({ code }) {
    const newShortUrl = {
      longCode: code,
      shortCode: 'test',
      pathUrl: `${process.env.DEEP_LINK_HOST}/about/${code}`,
      shortURL: `${process.env.REDIRECT_URL}/urls/test`,
    };

    short_urls.push(newShortUrl);
  }
}
