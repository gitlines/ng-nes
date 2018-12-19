import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent, ContainerComponentProps } from './container.component';
import { getSingleNativeElement } from '../../test-helpers';
import { By } from '@angular/platform-browser';

describe('ContainerComponent', () => {
  let testSubject: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent ]
    });

    fixture = TestBed.createComponent(ContainerComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as ContainerComponentProps;
  }));

  describe('render', () => {

    it('creates a div with class "nes-container"', () => {
      // Given
      const expectedTagName = 'DIV';

      // When
      fixture.detectChanges();

      // Then
      const balloon = getSingleNativeElement(fixture, '.nes-container');
      expect(balloon).toBeTruthy();
      expect(balloon.tagName).toEqual(expectedTagName);
    });

    it('adds inline style on the div', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-container').style.background).toEqual(expectedStyle);
    });

    it('sets additional classes on the div', () => {
      // Given
      testSubject.props.dark = true;

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-container').classList).toContain('is-dark');
    });

    it('does not display header when no header supplied in props', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(fixture.debugElement.query(By.css('.title'))).toBeFalsy();
    });

    it('displays header when header supplied in props', () => {
      // Given
      const expectedTitle = 'any title';
      testSubject.props.title = expectedTitle;

      // When
      fixture.detectChanges();

      // Then
      const title = getSingleNativeElement(fixture, '.title');
      expect(title).toBeTruthy();
      expect(title.innerHTML).toEqual(expectedTitle);
    });
  });

  describe('classList()', () => {

    it('returns empty object if no props have been given', () => {
      // Given
      testSubject.props = null;
      const expectedClassList = {};

      // When
      const result = testSubject.classList;

      // Then
      expect(result).toEqual(expectedClassList);
    });

    it('object has "with-title" set to true if props.title is truthy', () => {
        // Given
        testSubject.props.title = 'any title';

        // When
        const result = testSubject.classList;

        // Then
        expect(result['with-title']).toEqual(true);
    });

    it('object has "is-dark" set to true if props.dark is true', () => {
      // Given
      testSubject.props.dark = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-dark']).toEqual(true);
    });

    it('object has "is-rounded" set to true if props.rounded is true', () => {
      // Given
      testSubject.props.rounded = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-rounded']).toEqual(true);
    });

    it('object has "is-centered" set to true if props.dark is true', () => {
      // Given
      testSubject.props.centered = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-centered']).toEqual(true);
    });
  });
});
