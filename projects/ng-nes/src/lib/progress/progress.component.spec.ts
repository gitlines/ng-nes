import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressComponent, ProgressComponentProps } from './progress.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('ProgressComponent', () => {
  let testSubject: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressComponent]
    });

    fixture = TestBed.createComponent(ProgressComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {
      value: 10,
      max: 100
    } as ProgressComponentProps;
  }));

  describe('render', () => {

    it('creates a progress element with class ".nes-progress"', () => {
      // Given
      const expectedTagName = 'PROGRESS';

      // When
      fixture.detectChanges();

      // Then
      const progress = getSingleNativeElement(fixture, '.nes-progress');
      expect(progress).toBeTruthy();
      expect(progress.tagName).toEqual(expectedTagName);
    });

    it('adds inline style on the progress element', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-progress').style.background).toEqual(expectedStyle);
    });

    it('sets additional classes on the progress element', () => {
      // Given
      testSubject.props.primary = true;

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-progress').classList).toContain('is-primary');
    });
  });

  describe('classList()', () => {

    it('object has "is-primary" set to true if props.primary is true', () => {
      // Given
      testSubject.props.primary = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-primary']).toEqual(true);
    });

    it('object has "is-success" set to true if props.success is true', () => {
      // Given
      testSubject.props.success = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-success']).toEqual(true);
    });

    it('object has "is-warning" set to true if props.warning is true', () => {
      // Given
      testSubject.props.warning = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-warning']).toEqual(true);
    });

    it('object has "is-error" set to true if props.error is true', () => {
      // Given
      testSubject.props.error = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-error']).toEqual(true);
    });

    it('object has "is-pattern" set to true if props.pattern is true', () => {
      // Given
      testSubject.props.pattern = true;

      // When
      const result = testSubject.classList;

      // Then
      expect(result['is-pattern']).toEqual(true);
    });
  });
});
