import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent, IconComponentProps } from './icon.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('IconComponent', () => {
  let testSubject: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconComponent ]
    });

    fixture = TestBed.createComponent(IconComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as IconComponentProps;
  }));

  describe('render', () => {

    it('creates a span with class ".nes-icon"', () => {
      // Given
      const expectedTagName = 'SPAN';

      // When
      fixture.detectChanges();

      // Then
      const icon = getSingleNativeElement(fixture, '.nes-icon');
      expect(icon).toBeTruthy();
      expect(icon.tagName).toEqual(expectedTagName);
    });

    it('class based on icon provided', () => {
      // Given
      const expectedIconClass = 'heart';
      testSubject.props.icon = expectedIconClass;

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-icon').classList).toContain(expectedIconClass);
    });

    it('adds inline style on the span', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.icon = 'star';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-icon').style.background).toEqual(expectedStyle);
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

    it('object has "is-transparent" set to true if props.transparent is true', () => {
      // Given
      testSubject.props.transparent = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-transparent']).toEqual(true);
    });

    it('object has "is-empty" set to true if props.empty is true', () => {
      // Given
      testSubject.props.empty = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-empty']).toEqual(true);
    });

    it('object has "is-half" set to true if props.half is true', () => {
      // Given
      testSubject.props.half = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-half']).toEqual(true);
    });
  });
});
