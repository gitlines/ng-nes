import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonComponent, BalloonComponentProps } from './balloon.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('BalloonComponent', () => {
  let testSubject: BalloonComponent;
  let fixture: ComponentFixture<BalloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonComponent ]
    });

    fixture = TestBed.createComponent(BalloonComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as BalloonComponentProps;
  }));

  describe('render', () => {

    it('creates a div with class "nes-balloon"', () => {
      // Given
      const expectedTagName = 'DIV';

      // When
      fixture.detectChanges();

      // Then
      const balloon = getSingleNativeElement(fixture, '.nes-balloon');
      expect(balloon).toBeTruthy();
      expect(balloon.tagName).toEqual(expectedTagName);
    });

    it('adds inline style on the image', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-balloon').style.background).toEqual(expectedStyle);
    });

    it('sets additional classes on the div', () => {
      // Given
      testSubject.props.fromLeft = true;

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-balloon').classList).toContain('from-left');
    });
  });

  describe('classList()', () => {

    it('returns empty object if no props have been given', () => {
      // Given
      testSubject.props = null;
      const expectedClassList = {};

      // When
      const result = testSubject.classList;

      expect(result).toEqual(expectedClassList);
    });

    it('object has "from-left" set to true if props.fromLeft is true', () => {
      // Given
      testSubject.props.fromLeft = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['from-left']).toEqual(true);
    });

    it('object has "from-right" set to true if props.fromRight is true', () => {
      // Given
      testSubject.props.fromRight = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['from-right']).toEqual(true);
    });
  });
});
