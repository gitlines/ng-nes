import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent, AvatarComponentProps } from './avatar.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('AvatarComponent', () => {
  let testSubject: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarComponent ]
    });

    fixture = TestBed.createComponent(AvatarComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as AvatarComponentProps;
  }));

  describe('render', () => {

    it('creates a img with class "nes-avatar"', () => {
      // Given
      const expectedTagName = 'IMG';

      // When
      fixture.detectChanges();

      // Then
      const avatar = getSingleNativeElement(fixture, '.nes-avatar');
      expect(avatar).toBeTruthy();
      expect(avatar.tagName).toEqual(expectedTagName);
    });

    it('adds image src on the image', () => {
      // Given
      const expectedSrc = 'src';
      testSubject.props.src = expectedSrc;

      // When
      fixture.detectChanges();

      // Then
      expect((getSingleNativeElement(fixture, '.nes-avatar') as HTMLImageElement).src).toContain(expectedSrc);
    });

    it('adds image alt on the image', () => {
      // Given
      const expectedAlt = 'alt';
      testSubject.props.alt = expectedAlt;

      // When
      fixture.detectChanges();

      // Then
      expect((getSingleNativeElement(fixture, '.nes-avatar') as HTMLImageElement).alt).toEqual(expectedAlt);
    });

    it('adds inline style on the image', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-avatar').style.background).toEqual(expectedStyle);
    });

    it('sets additional classes on the image', () => {
      // Given
      testSubject.props.small = true;

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-avatar').classList).toContain('is-small');
    });
  });

  describe('classList()', () => {

    it('object has "is-small" set to true if props.small is true', () => {
      // Given
      testSubject.props.small = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-small']).toEqual(true);
    });

    it('object has "is-medium" set to true if props.medium is true', () => {
      // Given
      testSubject.props.medium = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-medium']).toEqual(true);
    });

    it('object has "is-large" set to true if props.large is true', () => {
      // Given
      testSubject.props.large = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-large']).toEqual(true);
    });

    it('object has "is-rounded" set to true if props.rounded is true', () => {
      // Given
      testSubject.props.rounded = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-rounded']).toEqual(true);
    });
  });
});
