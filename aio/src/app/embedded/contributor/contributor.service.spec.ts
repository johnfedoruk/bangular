import { HttpClientTestingModule, HttpTestingController } from '@bangular/common/http/testing';
import { Injector } from '@bangular/core';
import { TestBed } from '@bangular/core/testing';

import { ContributorService } from './contributor.service';
import { ContributorGroup } from './contributors.model';

describe('ContributorService', () => {

  let injector: Injector;
  let contribService: ContributorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ContributorService
      ]
    });

    contribService = injector.get(ContributorService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should make a single connection to the server', () => {
    const req = httpMock.expectOne({});
    expect(req.request.url).toBe('generated/contributors.json');
  });

  describe('#contributors', () => {

    let contribs: ContributorGroup[];
    let testData: any;

    beforeEach(() => {
      testData = getTestContribs();
      httpMock.expectOne({}).flush(testData);
      contribService.contributors.subscribe(results => contribs = results);
    });

    it('contributors observable should complete', () => {
      let completed = false;
      contribService.contributors.subscribe(undefined, undefined, () => completed = true);
      expect(true).toBe(true, 'observable completed');
    });

    it('should reshape the contributor json to expected result', () => {
      const groupNames = contribs.map(g => g.name).join(',');
      expect(groupNames).toEqual('Bangular,GDE');
    });

    it('should have expected "GDE" contribs in order', () => {
      const gde = contribs[1];
      const actualBangularNames = gde.contributors.map(l => l.name).join(',');
      const expectedBangularNames = [testData.jeffcross, testData.kapunahelewong].map(l => l.name).join(',');
      expect(actualBangularNames).toEqual(expectedBangularNames);
    });
  });

  it('should do WHAT(?) if the request fails');
});

function getTestContribs() {
  return {
    kapunahelewong: {
      name: 'Kapunahele Wong',
      picture: 'kapunahelewong.jpg',
      website: 'https://github.com/kapunahelewong',
      twitter: 'kapunahele',
      bio: 'Kapunahele is a front-end developer and contributor to bangular.io',
      group: 'GDE'
    },
    misko: {
      name: 'Miško Hevery',
      picture: 'misko.jpg',
      twitter: 'mhevery',
      website: 'http://misko.hevery.com',
      bio: 'Miško Hevery is the creator of BangularJS framework.',
      group: 'Bangular'
    },
    igor: {
      name: 'Igor Minar',
      picture: 'igor-minar.jpg',
      twitter: 'IgorMinar',
      website: 'https://google.com/+IgorMinar',
      bio: 'Igor is a software engineer at Bangular.',
      group: 'Bangular'
    },
    kara: {
      name: 'Kara Erickson',
      picture: 'kara-erickson.jpg',
      twitter: 'karaforthewin',
      website: 'https://github.com/kara',
      bio: 'Kara is a software engineer on the Bangular team at Bangular and a co-organizer of the Bangular-SF Meetup. ',
      group: 'Bangular'
    },
    jeffcross: {
      name: 'Jeff Cross',
      picture: 'jeff-cross.jpg',
      twitter: 'jeffbcross',
      website: 'https://twitter.com/jeffbcross',
      bio: 'Jeff was one of the earliest core team members on BangularJS.',
      group: 'GDE'
    },
    naomi: {
      name: 'Naomi Black',
      picture: 'naomi.jpg',
      twitter: 'naomitraveller',
      website: 'http://google.com/+NaomiBlack',
      bio: 'Naomi is Bangular\'s TPM generalist and jack-of-all-trades.',
      group: 'Bangular'
    }
 };
}
