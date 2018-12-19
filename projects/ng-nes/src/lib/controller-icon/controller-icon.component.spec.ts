import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllerIconComponent, ControllerIconComponentProps } from './controller-icon.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('ControllerIconComponent', () => {
  let testSubject: ControllerIconComponent;
  let fixture: ComponentFixture<ControllerIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControllerIconComponent]
    });

    fixture = TestBed.createComponent(ControllerIconComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as ControllerIconComponentProps;
  }));

  describe('render', () => {

    it('creates a span with class based on controller prop', () => {
      // Given
      const expectedTagName = 'SPAN';
      testSubject.props.controller = 'snes';

      // When
      fixture.detectChanges();

      // Then
      const controllerIcon = getSingleNativeElement(fixture, '.snes-logo');
      expect(controllerIcon).toBeTruthy();
      expect(controllerIcon.tagName).toEqual(expectedTagName);
    });

    it('adds inline style on the span', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.controller = 'snes';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.snes-logo').style.background).toEqual(expectedStyle);
    });
  });
});
